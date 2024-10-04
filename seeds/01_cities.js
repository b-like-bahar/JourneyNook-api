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
      city_image_path: 'https://res.cloudinary.com/deuku9jpm/image/upload/v1728039156/Cancun-Mexico_dr37di.png'
    },
    {
      id: 2,
      city_name: 'Barcelona',
      country: 'Spain',
      city_image_path: '/https://res.cloudinary.com/deuku9jpm/image/upload/v1728039155/Barcelona-Spain_zswk2w.png'
    },
    {
      id: 3,
      city_name: 'Istanbul',
      country: 'Turkey',
      city_image_path: 'https://res.cloudinary.com/deuku9jpm/image/upload/v1728039161/Istanbul-Turkey_suqpnd.png'
    },
    {
      id: 4,
      city_name: 'London',
      country: 'England',
      city_image_path: '/https://res.cloudinary.com/deuku9jpm/image/upload/v1728039163/London-England_v4ihhe.png'
    },
    {
      id: 5,
      city_name: 'Moscow',
      country: 'Russia',
      city_image_path: 'https://res.cloudinary.com/deuku9jpm/image/upload/v1728039169/Moscow-Russia_fijh6n.png'
    },
    {
      id: 6,
      city_name: 'Paris',
      country: 'France',
      city_image_path: 'https://res.cloudinary.com/deuku9jpm/image/upload/v1728039170/Paris-France_iyo7f7.png'
    },
    {
      id: 7,
      city_name: 'Rio de Janeiro',
      country: 'Brazil',
      city_image_path: 'https://res.cloudinary.com/deuku9jpm/image/upload/v1728039175/rio-de-janeiro-brazil_yhmdgw.png'
    },
    {
      id: 8,
      city_name: 'Rome',
      country: 'Italy',
      city_image_path: 'https://res.cloudinary.com/deuku9jpm/image/upload/v1728039177/Rome-Italy_izcysv.png'
    },
    {
      id: 9,
      city_name: 'Shanghai',
      country: 'China',
      city_image_path: 'https://res.cloudinary.com/deuku9jpm/image/upload/v1728039182/Shanghai-China_tqpppd.png'
    },
    {
      id: 10,
      city_name: 'Sydney',
      country: 'Australia',
      city_image_path: 'https://res.cloudinary.com/deuku9jpm/image/upload/v1728039182/Sydney-Australia_jvfwxc.png'
    }
  ]
);
}
