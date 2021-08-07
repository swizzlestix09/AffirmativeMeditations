import React from 'react';
import axios from 'axios';
import config from '../../../config'
import Cache from 'js-cache';
import $ from 'jquery';

const cacheable = true,
  cache = new Cache();

// On request, return the cached version, if any
axios.interceptors.request.use(request => {

    // Only cache GET requests
    if (request.method === 'get' && cacheable) {
        let url = request.url;

        // Append the params, I use jquery param but you can change to whatever you use
        if (request.params)
            url += '?' + $.param(request.params);

        const _cached = cache.get(url);

        if (_cached) {
            _cached.__fromCache = true;

            console.log(`"${url}" served from cache:`, _cached);

            request.data = _cached;

            // Set the request adapter to send the cached response and prevent the request from actually running
            request.adapter = () => {
                return Promise.resolve({
                    data: _cached,
                    status: request.status,
                    statusText: request.statusText,
                    headers: request.headers,
                    config: request,
                    request: request
                });
            };
        }
    }

    return request;

}, error => Promise.reject(error));

// On response, set or delete the cache
axios.interceptors.response.use(response => {

    // if you dont want to cache a specific url, send a param `__cache = false`
    const isCacheable = !response.config.params || (response.config.params && response.config.params.__cache !== false);

    if (cacheable && isCacheable) {
        let url = response.config.url;

        if (response.config.params)
            url += '?' + $.param(response.config.params);

        if (response.config.method === 'get') {
            // On get request, store the response in the cache
            cache.set(url, response.data);
        } else {
            // For post, put or delete, just delete the cached version of the url
            // e.g. posting to `/users` would delete the `/users` cache, so when you ask for users again you get the real version
            cache.del(response.config.url);

            // also, when making a post,put or delete request to `/users/1`, would try to delete the `/users` for the same reason
            const uri = url.replace(config.http.api.base_url, ''),
                parentUri = /(.*)\/([a-z0-9\-]+)\/?$/ig.exec(uri);

            if (parentUri)
                cache.del(`${config.http.api.base_url}${parentUri[1]}`);

            // Delete similar url that just have query string diferences
            // Specially useful for things like Laravel's `with` param
            // e.g. `/users?with=permissions` will get cached but the post to `/users` wont remove it from the cache
            // so I look all the cached url's and try to match it without the querystrings
            const urls = Object.keys(cache.debug());

            for (const _url of urls) {
                if (_url.match(/^[^?]+/)[0] === response.config.url)
                    cache.del(_url);
            }
        }
    }

    return response;
}, error => Promise.reject(error));

function loadProductStyle(productID) {
  var allConfig = {
    method: 'get',
    url: `http://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${productID}/styles`,
    headers: {Authorization: config.TOKEN},
  };

  axios(allConfig)
    .then((res) => {
      this.setState({ allStyles: res.data });
    })
    .then(() => {
      this.findDefault();
    })
    .catch(() => {
      return <div> Something's Wrong</div>;
      console.log('err');
    });

  allConfig.url = `http://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${productID}`;

  axios(allConfig)
    .then((res) => {
      this.setState({ product: res.data });
    })
    .catch(() => {
      return <div> Something's Wrong</div>;
      console.log('err');
    });
}

function getProductData(productID) {
  axios.get(
    `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${productID}/`,
    {headers: {Authorization: config.TOKEN}})
    .then(results => {
      this.setState({
        "id": results.data.id,
        "name": results.data.name,
        "category": results.data.category,
        "default_price": results.data.default_price,
        "features": results.data.features
      })
    })
    .catch((err)=>{
      console.log(err);
    });
  }

function getProductImage(productID) {
  axios.get(
    `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${productID}/styles`,
    {headers: {Authorization: config.TOKEN}})
    .then(results => {
      // find the default style
      let defaultIdx = 0;
      for (let i = 0; i < results.data.results.length; i++) {
        if (results.data.results[i]["default?"]) {
          defaultIdx = i;
        }
      }
      let photosArray = results.data.results[defaultIdx].photos.map((style) => {
        return style.thumbnail_url;
      });
      this.setState({
        "photos": photosArray
      })
    })
    .catch((err)=>{
      console.log(err);
    });
  }

function getProductRating(productID) {
  axios.get(
    `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews/meta/?product_id=${productID}`,
    {headers: {Authorization: config.TOKEN}})
    .then(results => {
      const ratingsMetadata = Object.entries(results.data.ratings);
      let numerator = 0;
      let denominator = 0;
      let rating = 0;
      for (let i = 0; i < ratingsMetadata.length; i++) {
        numerator += (ratingsMetadata[i][0] * parseInt(ratingsMetadata[i][1]));
        denominator += parseInt(ratingsMetadata[i][1]);
      }
      rating = numerator / denominator;
      let ratingPercent = ((rating / 5) * 100).toString() + '%';
      this.setState({
        "rating": ratingPercent
      })
    })
    .catch((err)=>{
      console.log(err);
    });
  }

function getRelatedProducts(productID) {
  axios.get(
    `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${productID}/related`,
    {headers: {Authorization: config.TOKEN}})
  .then((results) => {
    this.setState({relatedProductsList: results.data})
  })
  .catch((err)=>{
    console.log(err);
  });
  this.setState({relatedListEndIdx: 3})
}

function getAllReviews (productID) {
  axios({
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews/?product_id=${productID}`,
    headers: {
      'Authorization': config.TOKEN
    },

  })
    .then ((result)=>{
      this.setState({allReviews: result.data});
      // console.log(result.data);
      // console.log('reviews state', this.state.reviews);
    })
    .catch((err)=>{
      console.log(err);
    });

}

function getReviews (productID, count, sort) {
  axios({
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews/?product_id=${productID}`,
    headers: {
      'Authorization': config.TOKEN
    },
    params: {
      count: count,
      sort: sort
    }
  })
    .then ((result)=>{
      this.setState({reviews: result.data});
      // console.log(result.data);
      // console.log('reviews state', this.state.reviews);
    })
    .catch((err)=>{
      console.log(err);
    });

}

function getMeta (productID) {
  return axios({
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews/meta?product_id=${productID}`,
    headers: {
      'Authorization': config.TOKEN
    }
  })
    .then ((result)=>{
      this.setState({
        meta: result.data,
        characteristics: result.data.characteristics,
        comfortId: result.data.characteristics.Comfort.id,
        qualityId: result.data.characteristics.Quality.id,
        sizeId: result.data.characteristics.Size.id,
        widthId: result.data.characteristics.Width.id
      });
      // console.log(result);
      // console.log(this.state.meta);
    })
    .catch((err)=>{
      console.log(err);
    });
}

export {
  loadProductStyle,
  getProductData,
  getProductImage,
  getProductRating,
  getRelatedProducts,
  getAllReviews,
  getReviews,
  getMeta
}