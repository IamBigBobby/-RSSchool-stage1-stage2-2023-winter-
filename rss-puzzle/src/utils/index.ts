function colorBodyRed(): void {
  const bodyElement: HTMLElement | null = document.body;
  if (bodyElement) {
    bodyElement.style.backgroundColor = 'red';
  } else {
    console.log('nooooooadadasdasdasasdaooooo');
  }
}

colorBodyRed();

// ^(feat|fix)\/RSS-PZ-[A-Z]{2}-\d{2}_\w+$
