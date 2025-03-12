export interface Handshake {
    cities: City[]
}

export interface City {
    city_id: number
    city_name: string
    city_sequence: number
    is_top_city: boolean
    is_enable_for_from: number
}