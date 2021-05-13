import React from 'react';

function Footer() {
    const copyright = new Date().getFullYear();

    return (
			<footer>
				<p>
					Copyright <em>Jaymi Leigh</em> {copyright}
				</p>
			</footer>
		);
}

export default Footer;