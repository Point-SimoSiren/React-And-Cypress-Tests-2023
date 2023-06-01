import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render} from '@testing-library/react'

import Message from './Message'

test('Testataan, että Messagen teksti renderöityy oikein', () => {

    const message = "Lisättiin kurssi: SQL perusteet!"

    const component = render(<Message message={message} />)


    expect(component.container).toHaveTextContent("Lisättiin kurssi: SQL perusteet!")

    
    //mahdollisuus debugata testiä
    component.debug()

}

)
