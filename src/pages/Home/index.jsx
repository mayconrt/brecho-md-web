import React, {useState, useEffect} from 'react'
import CardNumber from '../../common/CardNumber'

import {api, URL_PRODUCT_SUMARY, URL_PURCHASE_SUMARY, URL_SALES_SUMARY} from '../../api/services'

import './style.css'

const Home = () => {

    const [productSumary, setProductSumary] = useState({})
    const [clientsSumary, setClientsSumary] = useState({})
    const [salesSumary, setSalesSumary] = useState({})
    const [purchaseSumary, setPurchaseSumary] = useState({})

    useEffect(() => {

        (async () => {

            
            api.get(URL_PRODUCT_SUMARY).then(response => {
                setProductSumary(response.data.data)
            })

            // api.get(URL_CLIENT_SUMARY).then(response => {
            //     setClientsSumary(response.data.data)
            // })
            
            api.get(URL_SALES_SUMARY).then(response => {
                setSalesSumary(response.data.data)
            })         
            
            api.get(URL_PURCHASE_SUMARY).then(response => {
                console.log('purchase')
                setPurchaseSumary(response.data.data)
            })                   

        })();

    }, []);

    return (

        <div className="ma-div-home">
            <CardNumber title="Produtos" value="40">
                <span>Quantidade: {productSumary.totalQuantity}</span>
                <span>Valor Total: {productSumary.totalPrice}</span>
            </CardNumber>
            <CardNumber title="Vendas" value="5" >
                <span>Custo Total: {purchaseSumary.totalPurchase}</span>
                <span>Total Vendas: {salesSumary.totalSales}</span>
                <span>Lucro: {salesSumary.totalSales - purchaseSumary.totalPurchase}</span>
            </CardNumber>
        </div>
    )
}

export default Home