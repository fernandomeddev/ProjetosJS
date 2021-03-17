function converter() {
    //alert('Hello World!')
    //var real = document.getElementById('realbrasil')
    //var dollar = document.getElementById('usdolar')
    //var euro = document.getElementById('euro')
    var fconverter = document.getElementById('txtvalor')
    //var iof = `${fconverter} / 100 * 1.1`
    //var fx_value = `${fconverter} / 100 * 1`
    var fx_rate_Dol_to_Real = 5.2164
    var fx_rate_Eur_to_Real = 6.3970
    var fx_rate_Dol_to_Eur = 1.2206
    var res = document.getElementById('res')

    if (fconverter.value.length == 0) {
        alert('[ERRO]seleção inválida!')
    } else { 
        var fmoeda = document.getElementsByName('radmoeda')
        var fmoedaconvertida = document.getElementsByName('radmoedac')
        var resultado = ''
        var resiof = ''
        var resTxAdm = ''
        var resfinal = ''
        //var iof = 1.1% fconverter  
        //var fx = 1% fconverter
       // var moeda = ''
        if (fmoeda[0].checked && fmoedaconvertida[0].checked) {
            resultado = fx_rate_Dol_to_Real * Number(fconverter.value)
            resiof = resultado / 100 * 1.1
            resTxAdm = resultado / 100 * 1
            resfinal = resultado - resiof - resTxAdm
            res.innerHTML = `O valor do IOF é de R$${resiof}, a taxa administrativa é de R$${resTxAdm}, o valor convertido é de R$${resfinal}` 
            
           

        } else if (fmoeda[1].checked && fmoedaconvertida[0].checked) {
            resultado = fx_rate_Eur_to_Real * Number(fconverter.value)
            resiof = resultado / 100 * 1.1
            resTxAdm = resultado / 100 * 1
            resfinal = resultado - resiof - resTxAdm
            res.innerHTML = `O valor do IOF é de U$${resiof}, a taxa administrativa é de U$${resTxAdm}, o valor convertido é de R$${resfinal}`
            //res.innerHTML = ('valor convertido é de: R$' + resultado)
           // moeda = (euro - fx_value - iof) * fx_rate_Dol_to_Eur
        } else if (fmoeda[1].checked && fmoedaconvertida[1].checked) {
            resultado = fx_rate_Dol_to_Eur * Number(fconverter.value)
            resiof = resultado / 100 * 1.1
            resTxAdm = resultado / 100 * 1
            resfinal = resultado - resiof - resTxAdm
            res.innerHTML = `O valor do IOF é de U$${resiof}, a taxa administrativa é de U$${resTxAdm}, o valor convertido é de U$${resfinal}` 
            
            //res.innerHTML = ('valor convertido é de: U$' + resultado)
        } else if (fmoeda[2].checked && fmoedaconvertida[1].checked) {
           resultado  = Number(fconverter.value) / fx_rate_Dol_to_Real
           resiof = resultado / 100 * 1.1
           resTxAdm = resultado / 100 * 1
           resfinal = resultado - resiof - resTxAdm
           res.innerHTML = `O valor do IOF é de R$${resiof}, a taxa administrativa é de R$${resTxAdm}, o valor convertido é de U$${resfinal}` 
            
        } else if (fmoeda[2].checked && fmoedaconvertida[2].checked) {
           resultado = Number(fconverter.value) / fx_rate_Eur_to_Real
           resiof = resultado / 100 * 1.1
           resTxAdm = resultado / 100 * 1
           resfinal = resultado - resiof - resTxAdm
           res.innerHTML = `O valor do IOF é de R$${resiof}, a taxa administrativa é de R$${resTxAdm}, o valor convertido é de EU$${resfinal}` 
            
        } else {

            alert('[ERRO]seleção inválida!')

        }
        
        //res.innerHTML = ('valor convertido é de: R$' + resultado)
        //alert('ok vamos prosseguir!')
    }



       

    
}