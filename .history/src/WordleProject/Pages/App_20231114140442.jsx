import Modal from "../Components/Modal";

import { useState } from "react";


function App() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };
    const handleClose = () => {
        setShowModal(false);
    };
    const actionBar = (
        <div>
            <button onClick={handleClose}>
                I Accept
            </button>
        </div>
    )

    const modal = (
        <Modal onClose={handleClose} actionBar={actionBar}>
            <p>
                Here is an important agreement for you to accept
            </p>
        </Modal>
    );



    return (
        < div >
            <button onClick={handleClick}>
                Open Modal
            </button>
            {showModal && modal}
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id imperdiet justo, eu scelerisque libero. Maecenas nisl mauris, fringilla vel ultricies ut, ornare in lorem. Vivamus sollicitudin ultrices erat sit amet faucibus. Sed aliquam erat felis. Sed lectus turpis, eleifend quis mollis et, vulputate eget nulla. Phasellus pellentesque molestie nulla. Etiam scelerisque ornare orci vel tempus. Aliquam tortor elit, rhoncus ut sapien id, feugiat ullamcorper velit. Nullam sagittis odio arcu, at viverra orci dignissim ut. Nulla et risus auctor, hendrerit nibh quis, scelerisque augue. Integer eu risus id nisi ultrices ultricies aliquam ultrices eros.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id imperdiet justo, eu scelerisque libero. Maecenas nisl mauris, fringilla vel ultricies ut, ornare in lorem. Vivamus sollicitudin ultrices erat sit amet faucibus. Sed aliquam erat felis. Sed lectus turpis, eleifend quis mollis et, vulputate eget nulla. Phasellus pellentesque molestie nulla. Etiam scelerisque ornare orci vel tempus. Aliquam tortor elit, rhoncus ut sapien id, feugiat ullamcorper velit. Nullam sagittis odio arcu, at viverra orci dignissim ut. Nulla et risus auctor, hendrerit nibh quis, scelerisque augue. Integer eu risus id nisi ultrices ultricies aliquam ultrices eros.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id imperdiet justo, eu scelerisque libero. Maecenas nisl mauris, fringilla vel ultricies ut, ornare in lorem. Vivamus sollicitudin ultrices erat sit amet faucibus. Sed aliquam erat felis. Sed lectus turpis, eleifend quis mollis et, vulputate eget nulla. Phasellus pellentesque molestie nulla. Etiam scelerisque ornare orci vel tempus. Aliquam tortor elit, rhoncus ut sapien id, feugiat ullamcorper velit. Nullam sagittis odio arcu, at viverra orci dignissim ut. Nulla et risus auctor, hendrerit nibh quis, scelerisque augue. Integer eu risus id nisi ultrices ultricies aliquam ultrices eros.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id imperdiet justo, eu scelerisque libero. Maecenas nisl mauris, fringilla vel ultricies ut, ornare in lorem. Vivamus sollicitudin ultrices erat sit amet faucibus. Sed aliquam erat felis. Sed lectus turpis, eleifend quis mollis et, vulputate eget nulla. Phasellus pellentesque molestie nulla. Etiam scelerisque ornare orci vel tempus. Aliquam tortor elit, rhoncus ut sapien id, feugiat ullamcorper velit. Nullam sagittis odio arcu, at viverra orci dignissim ut. Nulla et risus auctor, hendrerit nibh quis, scelerisque augue. Integer eu risus id nisi ultrices ultricies aliquam ultrices eros.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id imperdiet justo, eu scelerisque libero. Maecenas nisl mauris, fringilla vel ultricies ut, ornare in lorem. Vivamus sollicitudin ultrices erat sit amet faucibus. Sed aliquam erat felis. Sed lectus turpis, eleifend quis mollis et, vulputate eget nulla. Phasellus pellentesque molestie nulla. Etiam scelerisque ornare orci vel tempus. Aliquam tortor elit, rhoncus ut sapien id, feugiat ullamcorper velit. Nullam sagittis odio arcu, at viverra orci dignissim ut. Nulla et risus auctor, hendrerit nibh quis, scelerisque augue. Integer eu risus id nisi ultrices ultricies aliquam ultrices eros.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id imperdiet justo, eu scelerisque libero. Maecenas nisl mauris, fringilla vel ultricies ut, ornare in lorem. Vivamus sollicitudin ultrices erat sit amet faucibus. Sed aliquam erat felis. Sed lectus turpis, eleifend quis mollis et, vulputate eget nulla. Phasellus pellentesque molestie nulla. Etiam scelerisque ornare orci vel tempus. Aliquam tortor elit, rhoncus ut sapien id, feugiat ullamcorper velit. Nullam sagittis odio arcu, at viverra orci dignissim ut. Nulla et risus auctor, hendrerit nibh quis, scelerisque augue. Integer eu risus id nisi ultrices ultricies aliquam ultrices eros.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id imperdiet justo, eu scelerisque libero. Maecenas nisl mauris, fringilla vel ultricies ut, ornare in lorem. Vivamus sollicitudin ultrices erat sit amet faucibus. Sed aliquam erat felis. Sed lectus turpis, eleifend quis mollis et, vulputate eget nulla. Phasellus pellentesque molestie nulla. Etiam scelerisque ornare orci vel tempus. Aliquam tortor elit, rhoncus ut sapien id, feugiat ullamcorper velit. Nullam sagittis odio arcu, at viverra orci dignissim ut. Nulla et risus auctor, hendrerit nibh quis, scelerisque augue. Integer eu risus id nisi ultrices ultricies aliquam ultrices eros.
            </p>
        </div >
    );
}

export default App;
