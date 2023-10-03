class searchFilter {
    constructor(Product_find, req_query){
        this.Product_find = Product_find;
        this.req_query = req_query

    }

    filter(){

        
        
        const querycopy = {...this.req_query}
       
        const removeField = ['page', 'keyword','width','date','low']
        
        removeField.forEach((key) => delete querycopy[key]);


        this.Product_find = this.Product_find.find(querycopy);
        console.log(querycopy)
        return this;
       
    }
    fiterbyCategory(){
        const query = this.req_query.gender
        if(query !== undefined)
        this.Product_find = this.Product_find.find({gender:query})
        else this.Product_find = this.Product_find.find()
        return this
    }

   sort(no,no1){
        const sellinglow = this.req_query.low
            
        if (sellinglow !== undefined) {
            this.Product_find = this.Product_find.sort({'sellingPrice': no})
            return this;
        }
        const datesort = this.req_query.date
        if (datesort !== undefined) {
            this.Product_find = this.Product_find.sort({'createDate': no1})
            return this;
        }

        this.Product_find = this.Product_find
            return this;
    }

    pagination(width){

        if (Number(width) >= 1024) {
            const resultperpage = 50
            const currentpage = Number(this.req_query.page) || 1;
            const skip = resultperpage * (currentpage - 1)

            this.Product_find = this.Product_find.limit(resultperpage).skip(skip)

            return this;
        }

        this.Product_find = this.Product_find
        return this;
    }

    search(){
        const keyword = this.req_query.keyword ? {
            title: {
                $regex: this.req_query.keyword,
                $options: 'i',
            }
        }:{}
    
        this.Product_find = this.Product_find.find({...keyword})
        return this
    }
}

export default searchFilter;