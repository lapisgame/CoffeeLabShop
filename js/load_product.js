function render(loaddataIndex){
    db.collection('Prod').doc("ProdNames").get().then((docs) => {
        db.collection('Prod').doc(docs.data()[loaddataIndex]).get().then((product) => {
            product = product.data()
            console.log(product.name + " " + product.dis + " " + product.par1 + " " + product.par2 + " " + product.par3);
        }).catch((err) => {
            console.log("Траблы с отрисовкой, такого номера нет");
        })
    })
}


render(1)