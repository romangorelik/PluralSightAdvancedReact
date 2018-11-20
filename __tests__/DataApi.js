import DataApi from '../DataApi.js'
import { data } from '../testData.json'

const api = new DataApi(data)

describe('DataApi', () => {
  it ('exposes articles as an object', () => {
    const article = api.getArticles()
    const articleId = data.articles[0].id
    const articleTitle = data.articles[0].title

    expect(article).toHaveProperty(articleId)
    expect(article[articleId].title).toBe(articleTitle)
  })

  it('exposes authors as an object', () => {
    const authors = api.getAuthors()
    const authorId = data.authors[0].id
    const authorFirstName = data.authors[0].firstName

    expect(authors).toHaveProperty(authorId)
    expect(authors[authorId].firstName).toBe(authorFirstName)
  })
})