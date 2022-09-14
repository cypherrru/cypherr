if (document.querySelectorAll('.blog__tab-item') != null && document.querySelectorAll('.blog__content-items') != null) {
	const tabsItems = Array.from(document.querySelectorAll('.blog__tab-item'))
	const contentItems = Array.from(document.querySelectorAll('.blog__content-items'))

	const setActiveClass = (element, index, className = 'active') => {
		element[index].classList.add(`${className}`)
	}

	const clearActiveClass = (element, className = 'active') => {
		element.find(item => item.classList.remove(`${className}`))
	}

	const checkoutTabs = (item, index) => {
		item.addEventListener('click', () => {

			if (item.classList.contains('active')) return
			clearActiveClass(tabsItems)
			clearActiveClass(contentItems)

			setActiveClass(tabsItems, index)
			setActiveClass(contentItems, index)
		})
	}
	tabsItems.forEach(checkoutTabs)
}