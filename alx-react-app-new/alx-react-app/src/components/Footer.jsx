function Footer() {
    return (
        <footer>
        style={{
        backgroundColor: '#333',        // Dark background
        color: '#fff',                  // White text
        textAlign: 'center',            // Center-align text
        padding: '15px',                // Add some space inside
        position: 'fixed',              // Stick it to bottom
        bottom: 0,
        width: '100%',
        fontSize: '14px',               // Slightly smaller text
      }}
            <p>© 2023 City Lovers</p>
        </footer>
    );
}

export default Footer;
