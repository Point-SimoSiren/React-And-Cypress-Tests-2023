import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render, fireEvent} from '@testing-library/react'

import Kurssi from './Kurssi'

describe('Kurssikomponentin testit', () => {

    let component

    const kurssi = {kurssiId: 1000, nimi: 'Big Data', laajuus: '2 osp'}

    const mockHandler = jest.fn()

    beforeEach(() => {
        component = render(<Kurssi kurssi={kurssi} poistaKurssi={mockHandler} />)
    })


    test('Renderöi kurssin nimen ja laajuuden oikein', () => {
        const otsikko = component.container.querySelector('.kurssi')
        expect(otsikko).toHaveTextContent('Big Data')
        expect(otsikko).toHaveTextContent('2 osp')
    })


    test('Poistonapin klikkaus kutsuu poistofunktiota yhden kerran', async () => {
        const button = component.getByText('poista')
        fireEvent.click(button)

        expect(mockHandler.mock.calls).toHaveLength(1) // onko klikattu 1 kerran
        expect(mockHandler.mock.calls[0][0]).toBe(1000) // onko parametri välittynyt oikein
    })

}

)
