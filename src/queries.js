import { gql } from 'apollo-boost'

export const GET_MENUS = gql`
	query {
		menus {
			edges {
				node {
					name,
					id,
					menuItems {
						edges {
							node {
							menuItemId,
							label,
							url
							}
						}
					}
				}
			}
		}
	}
`
export const GET_MENU_PRIMARY = gql`
	query {
		menu(id:"TWVudTo1MzU=") {
			name,
			menuItems {
				edges {
					node {
						label,
						url,
						childItems {
							edges {
								node {
									label,
									url,
									childItems {
										edges {
											node {
												label,
												url,
												childItems {
													edges {
														node {
															label,
															url
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
`
