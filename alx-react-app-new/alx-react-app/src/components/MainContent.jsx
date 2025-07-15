function MainContent() {
    return (
        <main>
        style={{
        padding: '20px',                 // Space around content
        backgroundColor: '#f4f4f4',      // Light grey background
        minHeight: 'calc(100vh - 120px)', // Full height minus header & footer
        textAlign: 'left',               // Align text to the left
        color: '#333',                   // Dark grey text color
      }}
            <p>I love to visit New York, Paris, and Tokyo.</p>
        </main>
    );
}

export default MainContent;
