import {take, takeEvery,call, put, select, all, fork} from 'redux-saga/effects';
import {getproducts, getproductdetail} from '../../constants';
import {setProducts, setProductDetail} from '../actions';

const jsonUrl = 'data/products.json';

function* fetchProductsSaga(){
    const data =  yield fetch(jsonUrl)
    .then(res => res.json())
    .then(res => res)
    .catch(err=>console.log("Request for data is failed"));
    yield put(setProducts(data));
}

function* getProductdetailSaga(action){
    const state =  yield select();
    const data = state.productData.data.filter(item=>item.id === action.payload);
    yield put(setProductDetail(data));
}

function* getProductSaga(){
    yield take(getproducts);
    yield call(fetchProductsSaga);
}

function* getProductDetailSaga(){
    // if we need blocking calls we can use below while
    while(true){
        const action = yield take(getproductdetail);
        yield call(getProductdetailSaga, action);
    }
    // if we need non-blocking calls we can use below
    //const action = yield takeEvery(getproductdetail, getProductdetailSaga);
}

function* rootSaga(){
    yield all([
            fork(getProductSaga),
            fork(getProductDetailSaga)
        ]);
}

export default rootSaga;