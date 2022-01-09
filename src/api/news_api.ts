import axios, {AxiosResponse} from "axios";


export type ResponseNewsType = {
    status: string,
    totalResults: number,
    articles: Array<ArticlesType>

}


export type ArticlesType = {
    source: SourceType
    author: string,
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    publishedAt: string
    content: string
}


export type SourceType = {
    id: string
    name: string
}



const instance = axios.create({
    baseURL: "https://newsapi.org/v2/",
})


export const newsAPI = {
    getNews(sources?:string|null, q?:string|null, language?:string|null, country?:string|null, category?:string|null) {
      return instance.get<{params:{sources?:string|null, q?:string|null, language?:string|null, country?:string|null, category?:string|null}},AxiosResponse<ResponseNewsType>>(
          "top-headlines?"+
          'country=ru&' +
          'apiKey=3d5ebf17d7d3402783a28bda3e0c1759',{params:{sources, q, language, country, category}})
            .then(response =>{
                return response.data
            })
    }
}

