import { useRouter } from "next/router"

function ArticleListByCategory({ articles, category }) {
    return (
            <div>
                <h2>Showing news for category <i>{category}</i>
                </h2>
                {
                    articles.map(article =>{
                        return(
                            <div key={article.id}>
                                <h2>
                                    {article.id} {article.title}
                                </h2>
                                <p>{article.description}</p>
                                <hr/>
                            </div>
                        )
                    })
                }
            </div>
    )
    
}

export default ArticleListByCategory

export async function getServerSideProps(context) {
    const { params } = context
    const { category } = params
    const response = await fetch(`http://localhost:4000/news?category=${category}`)
    const data = await response.json()
    console.log(`Pre=rendering News Articles ${category}`) 
    return {
        props: {
            articles: data,
            category,
        },
    }
    
}
