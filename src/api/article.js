import request from '@/utils/request'

export function fetchArticleList(query) {
    return request({
        url: '/admin/article/articleList',
        method: 'get',
        params: query
    })
}

// ------------- tag -------------
export function fetchTagList(query) {
    return request({
        url: '/admin/tag/list',
        method: 'get',
        params: query
    })
}

export function createTag(data) {
    return request({
        url: '/admin/tag/create',
        method: 'put',
        data
    })
}

export function updateTag(data) {
    return request({
        url: '/admin/tag/update',
        method: 'post',
        data
    })
}

// ------------- category -------------
export function fetchCategoryList(data) {
    return request({
        url: '/admin/category/list',
        method: 'get',
        params: data
    })
}

export function createCategory(data) {
    return request({
        url: '/admin/category/create',
        method: 'put',
        data
    })
}

export function updateCategory(data) {
    return request({
        url: '/admin/category/update',
        method: 'post',
        data
    })
}

// ----------- article -------------
export function fetchArticle(id) {
    return request({
        url: 'admin/article/detail',
        method: 'get',
        params: { id }
    })
}

export function getCategories() {
    return request({
        url: 'admin/article/getCategories',
        method: 'get'
    })
}

export function getTags() {
    return request({
        url: 'admin/article/getTags',
        method: 'get'
    })
}

export function createArticle(data) {
    return request({
        url: 'admin/article/createArticle',
        method: 'put',
        data
    })
}

export function updateArticle(data) {
    return request({
        url: 'admin/article/updateArticle',
        method: 'post',
        data
    })
}

export function uploadImage(data) {
    return request({
        url: 'admin/article/uploadImage',
        method: 'post',
        headers: { 'Content-Type': 'multipart/form-data' },
        data
    })
}

export function fetchPv(pv) {
    return request({
        url: '/article/pv',
        method: 'get',
        params: { pv }
    })
}
