function load(name){
    let arrMix = new Array(6);
    let arrMono = new Array(6);
    let arrSpec = new Array(6);

    let count1=0;
    let count2=0;
    let count3=0;

    db.collection('Prod').get().then((el) => {
        for (let i=0; i<el.docs.length; i++){
            if (el.docs[i] !== undefined){
                let id = el.docs[i].id;
                db.collection('Prod').doc(id).get().then((elem) => {
                    if (elem.data().Type === "mix"){
                        arrMix[count1] = elem.data().Name;
                        console.log(count1, arrMix[count1]);
                        count1++;
                    }
                    else if (elem.data().Type === "mono"){
                        arrMono[count2] = elem.data().Name;
                        count2++;
                    }
                    else{
                        arrSpec[count3] = elem.data().Name;
                        count3++;
                    }   
                })
            }
        }
    }).then(() => {

        db.collection('Prod').doc(name).get().then((el) => {
            if (el.data().Type === "mix"){
                for (let i=0; i<6; i++){
                    const a = document.querySelector(`#all${i+1}`)
                    console.log(arrMix[i]);
                    a.setAttribute('href',`Product_page.html?name=${arrMix[i]}`)
                    a.querySelector("#img").setAttribute('src','img/first_img.png')
                }
            }
            else if (el.data().Type === "mono"){
                for (let i=0; i<6; i++){
                    const a = document.querySelector(`#all${i+1}`)
                    a.setAttribute('href',`Product_page.html?name=${arrMono[i]}`)
                    a.querySelector("#img").setAttribute('src','img/first_img.png')
                }
            }
            else{
                for (let i=0; i<6; i++){
                    const a = document.querySelector(`#all${i+1}`)
                    a.setAttribute('href',`Product_page.html?name=${arrSpec[i]}`)
                    a.querySelector("#img").setAttribute('src','img/first_img.png')
                }
            }
        })
        }
    )
}

let name = (new URL(document.URL)).searchParams.get('name');
load(name);