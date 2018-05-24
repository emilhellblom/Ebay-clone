import React, {PureComponent} from 'react'

export class ProductsList extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            product: {
                title: 'Spam',
                description: 'Canned meat',
                picture: 'placeholder',
                price: 2,
                email: 'something@hey.com',
                phone: '010222',
            }
        }
    }
    render() {

        return(
            <div className='products-list'>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Email</th>
                            <th>Phone number</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.state.product.title}
                            </td>
                            <td>{this.state.product.description}
                            </td>
                            <td>{this.state.product.price}
                            </td>
                            <td>{this.state.product.email}
                            </td>
                            <td>{this.state.product.phone}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}