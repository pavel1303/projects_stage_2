switchPage(e: Event) {
    const target = e.target as HTMLElement;
    if (target.id !== 'pang-prev' && target.id !== 'pang-next') return;
    if (target.id === 'pang-prev' && this.state.page !== 1) {
      this.state.page--;
      localStorage.setItem('garageState', JSON.stringify(this.state));
    } else if (target.id === 'pang-next') {
      const actualState = JSON.parse(localStorage.getItem('garageState') as string) as GarageState;
      actualState.page++;
      localStorage.setItem('garageState', JSON.stringify(actualState));
      this.renderPage();
    }
    
  }