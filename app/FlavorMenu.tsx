import { useState } from 'react'
import { Listbox } from '@headlessui/react'

const people = [
    { id: 1, name: 'Durward Reynolds', unavailable: false },
    { id: 2, name: 'Kenton Towne', unavailable: false },
    { id: 3, name: 'Therese Wunsch', unavailable: false },
    { id: 4, name: 'Benedict Kessler', unavailable: true },
    { id: 5, name: 'Katelyn Rohan', unavailable: false },
  ]

const FlavorMenu: React.FC = () => {

    const [selectedPerson, setSelectedPerson] = useState(people[0])

    const [flavor, setFlavor] = useState("pumpkinSpice")
    return (
        <div className="dropdown">
        <label tabIndex={0} className="btn m-1">Click</label>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-primary rounded-box w-48">
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
        </ul>
        </div>
    )
};

export default FlavorMenu;