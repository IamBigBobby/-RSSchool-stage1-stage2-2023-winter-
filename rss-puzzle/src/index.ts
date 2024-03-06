
function colorBodyRed(): void {
    const bodyElement: HTMLElement | null = document.body;
    if (bodyElement) {
      bodyElement.style.backgroundColor = 'red';
    } else {
      console.error('Body element not found.');
    }
  }
  
  // Пример вызова функции
  colorBodyRed();
  