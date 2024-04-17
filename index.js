var tokens=[
    ["BTC","0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c",18],
    ["USDC","0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",18],
    ["ETH" ,"0x2170ed0880ac9a755fd29b2688956bd959f933f8",20],
    ["USDT","0x55d398326f99059ff775485246999027b3197955",18],
    ["BUSD","0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",18],
    ["TWT" ,"0x4B0F1812e5Df2A09796481Ff14017e6005508003",18],
    ["DOGE","0xbA2aE424d960c26247Dd6c32edC70B295c744C43",8],
    ["TON" ,"0x76a797a59ba2c17726896976b7b3747bfd1d220f",9],
    ["XRP" ,"0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe",18],
    ["FOLOKI" ,"0xfb5b838b6cfeedc2873ab27866079ac55363d37e",9],
    ["Matic" ,"0xcc42724c6683b7e57334c4e856f4c9965ed682bd",18],
    ["ADA" ,"0x3ee2200efb3400fabb9aacf31297cbdd1d435d47",18],
    ["ASAL","0x35D9833bfE5B9309f93918953ABf91C086dd7c54",18],
    ["LTC","0x4338665CBB7B2485A8855A139b75D5e34AB0DB94",18],
    ["BNB","bnb142q467df6jun6rt5u2ar58sp47hm5f9wvz2cvg",18],
    ["SHIBA","0x2859e4544C4bB03966803b044A93563Bd2D0DD4D",18],
    ["Fwc","0x6D3a160B86eDcD46D8F9bBa25c2F88ccCADe19fc",9],
    ["ARV","0x6679eB24F59dFe111864AEc72B443d1Da666B360",8],
    ["CAT","0x59F4F336Bf3D0C49dBfbA4A74eBD2a6aCE40539A",9],
]
function myfunction()
{
    var userAdd=document.getElementById("userAdd").value;
    document.getElementById("add").innerHTML=userAdd;
    for(let i=0 ; i<=6 ; i++)
    {
        apicall(i,userAdd)
    }
    
    setTimeout(() => {
        for(let i=7 ; i<=18 ; i++)
    {
        apicall(i,userAdd);
    }
    }, 5000);
    
} 
//0x07547eb1e952048a7528Bccc8461836DE786aa26
function apicall(index,userAdd)
{
    fetch(`https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=${tokens[index][1]}&address=${userAdd}&tag=latest&apikey=U28P7RPHRXE3SNC7GUSRXDMWEAXC1JDBV6`)
        .then(response=> response.json())
        .then(data=>{document.getElementById(tokens[index][0]).innerHTML=strr(data.result,tokens[index][2])})
        .catch(error => console.error('Error: ',error));
}

function strr(result,decimal)
{
    if(result.length >= decimal)
    {
        result=result.slice(0, -(decimal-2)) ;
        let amount= parseInt (result)/100;
        return amount;
    }
    else
    {
        let n = decimal-result.length;
        result=result.slice(0,2);
        let amount=parseInt(result)/Math.pow(10,n);
        return amount;
    }
}
