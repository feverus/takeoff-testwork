import React from 'react';
import { connect } from 'react-redux';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import * as I from './../interfaces';
import {mapStateToPropsSearch as mapStateToProps} from '../store/mapStateToProps';
import {mapDispatchToProps} from '../store/mapDispatchToProps';

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
	  marginLeft: theme.spacing(1),
	  width: 'auto',
	},
}))
  
const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}))
  
const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: '12ch',
			'&:focus': {
				width: '30ch',
			},
		},
	},
}))

type P = I.PropsStateSearchInput & I.PropsDispaich;
class SearchInput_i extends React.Component<P> {		
	render() {
		return (
			<Search sx={{mb: 1}}>
				<SearchIconWrapper>
					<SearchIcon />
				</SearchIconWrapper>
				<StyledInputBase
					placeholder="Поиск…"
					value={this.props.filter}
					onChange={
						(event) => this.props.doSetSearch({filter:event.target.value})
					}              
				/>
			</Search>
		)
	}
}

const SearchInput = connect(mapStateToProps(), mapDispatchToProps())(SearchInput_i);
export default SearchInput;