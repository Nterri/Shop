import axios from 'axios'

export default class ShopService {
	static async getAll(limit = 10, page = 1) {
		try {
			const response = await axios.get(
				'https://jsonplaceholder.typicode.com/photos',
				{
					params: {
						_limit: limit,
						_page: page
					}
				}
			)
			return response
		} catch (e) {
			console.log(e)
		}
	}

	static async getByIdItem(id) {
		try {
			const response = await axios.get(
				'https://jsonplaceholder.typicode.com/photos/' + id
			)
			return response
		} catch (e) {
			console.log(e)
		}
	}

	static async getByIdItemReviews(id) {
		try {
			const response = await axios.get(
				`https://jsonplaceholder.typicode.com/posts/${id}/comments`
			)
			return response
		} catch (e) {
			console.log(e)
		}
	}
}
