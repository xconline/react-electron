// 示例reducer
const initState = {
    articleList: [],
    tags: [],
    categorys: [],
    tagJson: [], // tag和文章数量的hash数组
    selectedTag: undefined,
    page: 1,
    loadMoreFlag: false, // 是否已经加载完
    finishLoadFlag: false,
    loading: false
};
const articleReducer = (state = initState, action) => {
    let newState = null;
    switch (action.type) {
        case 'INIT_ARTICLE_LIST':
            newState = Object.assign({}, state, {
                articleList: action.articleList,
                page: action.loadMoreFlag ? state.page : 2,
                loadMoreFlag: action.loadMoreFlag
            });
            return newState;
        default:
            return state;
    }
};

export default articleReducer;
