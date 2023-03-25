'use strict'
const { DataTypes } = require('sequelize')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('band', [{
      band_id: 6,
      name: 'Linkin Park',
      genre: 'Nu Metal',
      available_start_time: '20:00:00',
      end_time: '23:00:00'
    },
    {
      band_id: 7,
      name: 'The Verve',
      genre: 'Alternative',
      available_start_time: '18:00:00',
      end_time: '21:00:00'
    },
    {
      band_id: 8,
      name: 'Motley Crue',
      genre: 'Heavy Metal',
      available_start_time: '19:00:00',
      end_time: '23:00:00'
    }])
  },

  async down(queryInterface, Sequelize) {
    /*
     ...
     */
  }
};
