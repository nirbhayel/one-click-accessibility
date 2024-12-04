import { ChevronDownIcon } from '@elementor/icons';
import List from '@elementor/ui/List';
import ListItem from '@elementor/ui/ListItem';
import ListItemButton from '@elementor/ui/ListItemButton';
import ListItemIcon from '@elementor/ui/ListItemIcon';
import ListItemText from '@elementor/ui/ListItemText';
import { MenuItems } from '@ea11y/components';
import { useSettings } from '@ea11y/hooks';
import { useState, Fragment } from '@wordpress/element';

const SidebarMenu = () => {
	const { openSidebar, selectedMenu, setSelectedMenu } = useSettings();
	const [expandedItems, setExpandedItems] = useState({ widget: true });

	const handleSelectedMenu = (parentKey, childKey) => {
		if (childKey) {
			setSelectedMenu({ parent: parentKey, child: childKey });
		} else {
			setSelectedMenu({ parent: parentKey, child: null });
		}
	};

	const handleToggleItem = (itemName) => {
		setExpandedItems((prev) => ({
			...prev,
			[itemName]: !prev[itemName], // Toggle the expanded state for the clicked item
		}));
	};
	return (
		<List>
			{Object.entries(MenuItems).map(([key, item]) => (
				<Fragment key={item.key}>
					<ListItem disableGutters>
						<ListItemButton
							onClick={() =>
								item.children ? handleToggleItem(key) : handleSelectedMenu(key)
							}
							sx={{ justifyContent: 'center' }}
							selected={
								key === selectedMenu.parent &&
								(!selectedMenu.child || !openSidebar)
							}
						>
							<ListItemIcon>{item.icon}</ListItemIcon>
							<ListItemText primary={item.name} hidden={!openSidebar} />
							{item.children && (
								<ListItemIcon
									sx={{ display: !openSidebar ? 'none' : 'default' }}
								>
									<ChevronDownIcon
										sx={{ rotate: expandedItems[key] ? '180deg' : '0' }}
									/>
								</ListItemIcon>
							)}
						</ListItemButton>
					</ListItem>
					{item.children && expandedItems[key] && (
						<List component="div" disablePadding>
							{Object.entries(item.children).map(([childKey, child]) => (
								<ListItem key={childKey} sx={{ py: 0 }} hidden={!openSidebar}>
									<ListItemButton
										sx={{ py: 0 }}
										hidden={!openSidebar}
										selected={childKey === selectedMenu.child && openSidebar}
										onClick={() => handleSelectedMenu(key, childKey)}
									>
										<ListItemText primary={child.name} hidden={!openSidebar} />
									</ListItemButton>
								</ListItem>
							))}
						</List>
					)}
				</Fragment>
			))}
		</List>
	);
};

export default SidebarMenu;
