module MainMenuHelper

	def menu( *links )
		items_output = ""

		links.each do |link|

			selected = (link[0] == current_page || link[0] == current_page.sub(/^\//, ''))
			
			li_class = link[1]
			li_class << ' current' if selected

			items_output << tag( :li, :class => link[1] ) { 
				tag( :div, :class => 'menu-item-wrapper' ) {
					tag( :a, :href => link[0] ) {
						link[2] + tag( :div, :class => 'tease' ) {
							link[3]
						}	
					}
				}
			}

		end
		tag( :ul, :class => 'main-menu' ){ items_output }
	end

end
