export interface IGithubResponseApi {
  total_count: number
  items: IRepo[]
}

export interface IRepo {
  id: number
  name: string
  owner: Owner
  description: string | null
  html_url: string
}

export interface Owner {
  login: string
  id: number
  avatar_url: string
  html_url: string
}
