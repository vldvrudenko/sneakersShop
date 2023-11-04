function Drawer({ onClose, onRemove, items = [] }) {
    return (

        <div className="overlay ">
            <div className="drawer ">
                <h3 className="mb-30 d-flex justify-between ">Store
                    <img onClick={onClose} className="cu-p" src="/img/close.svg" /></h3>

                {
                    items.length > 0 ? (
                        <div>
                            <div className="items">
                                {items.map((obj) => (
                                    <div key={obj} className="cartItem d-flex align-center mb-20">
                                        <div style={{ backgroundImage: `url(${obj.imageUrl})` }} className="cartItemImg"></div>
                                        <div className="mr-20 flex">
                                            <p className="mb-5">
                                                {obj.title}
                                            </p>
                                            <b>
                                                {obj.price}
                                            </b>
                                        </div>
                                        <img onClick={() => onRemove(obj.id)} className="removeBtn" src="/img/btn-removed.svg" alt="Removed" />
                                    </div>

                                ))}
                            </div>
                            <div className="cartTotalBlock">
                                <ul>
                                    <li>
                                        <span>All:</span>
                                        <div></div>
                                        <b>123132 uah</b>
                                    </li>
                                    <li>
                                        <span>Taxes 5%</span>
                                        <div></div>
                                        <b>123123 uah</b>
                                    </li>
                                </ul>
                                <button className="greenButton" >Order <img src="/img/line.svg" alt="arrow" /></button>
                            </div>

                        </div>
                    )
                        : <div className="cartEmpty d-flex align-center justify-center flex-column flex">
                            <img className="mb-20" width="120px" height="120px" src="/img/basket.svg" alt="box" ></img>
                            <h2>Empty Basket</h2>
                            <p className="opacity-6"> Find your own pair of shoes</p>
                            <button className="greenButton" onClick={onClose}>
                                <img src="/img/line.svg" alt="arrow"></img>
                                Go back
                            </button>

                        </div>

                }









            </div>
        </div>
    )
}



export default Drawer