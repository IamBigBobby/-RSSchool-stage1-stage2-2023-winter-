function colorBodyRed(): void {
  const bodyElement: HTMLElement | null = document.body;
  if (bodyElement) {
    bodyElement.style.backgroundColor = 'red';
  }
}

colorBodyRed();
