/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('cities').del();
  await knex('cities').insert([
    {
      id: 1,
      city_name: 'Cancun',
      country: 'Mexico',
      city_image_path: 'http://localhost:8080/images/cancun/cancun-mexico.png'
    },
    {
      id: 2,
      city_name: 'Barcelona',
      country: 'Spain',
      city_image_path: 'http://localhost:8080/images/barcelona/barcelona-spain.png'
    },
    {
      id: 3,
      city_name: 'Istanbul',
      country: 'Turkey',
      city_image_path: 'http://localhost:8080/images/istanbul/istanbul-turkey.png'
    },
    {
      id: 4,
      city_name: 'London',
      country: 'England',
      city_image_path: 'http://localhost:8080/images/london/london-england.png'
    },
    {
      id: 5,
      city_name: 'Moscow',
      country: 'Russia',
      city_image_path: 'http://localhost:8080/images/moscow/moscow-russia.png'
    },
    {
      id: 6,
      city_name: 'Paris',
      country: 'France',
      city_image_path: 'http://localhost:8080/images/paris/paris-france.png'
    },
    {
      id: 7,
      city_name: 'Rio de Janeiro',
      country: 'Brazil',
      city_image_path: 'http://localhost:8080/images/rio-de-janeiro/rio-de-janeiro-brazil.png'
    },
    {
      id: 8,
      city_name: 'Rome',
      country: 'Italy',
      city_image_path: 'http://localhost:8080/images/rome/rome-italy.png'
    },
    {
      id: 9,
      city_name: 'Shanghai',
      country: 'China',
      city_image_path: 'http://localhost:8080/images/shanghai/shanghai-china.png'
    },
    {
      id: 10,
      city_name: 'Sydney',
      country: 'Australia',
      city_image_path: 'http://localhost:8080/images/sydney/sydney-australia.png'
    }
  ]
);
}
