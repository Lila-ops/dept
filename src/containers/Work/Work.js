import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import styled from 'styled-components';
import Teasers from '../../components/Teasers/Teasers';
import Clients from '../../components/Clients/Clients';
import colors from '../../components/UI/Colors/Colors';
import Banner from '../../components/Banner/Banner';
import Spinner from '../../components/UI/Spinner/Spinner';
import breakpoint from '../../components/UI/Breakpoints/Breakpoints';
import * as actions from '../../store/work';
import * as services from '../../services';

const customStyles = {
    control: () => ({
        border: 'none',
        borderBottom: `1px solid ${colors.black}`,
        fontSize: '2.5vw',
        width: '180px',
        maxWidth: '180px',
        minWidth: '110px',
        display: 'flex',
        marginRight: '10px',
    }),
    indicatorSeparator: () => ({
        display: 'none'
    }),
    indicatorContainer: () => ({
        padding: '0 0 0 5px'
    }) 
};

const ContainerFluid = styled.div`
    width: 100%;
`;

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
`;

const ViewWrapper = styled.div`
    flex: 0 0 auto;
    padding-left: 20px;

    @media ${breakpoint.sm} {
        padding-left: 0;        
    }
`;

const ViewBtn = styled.button`
    border: none;
    outline: none;
    color: ${colors.black};
    padding: 1px 4px;
    cursor: pointer;
    font-size: 1.7rem;
    
    &:hover {
        background-color: ${colors.whiteThree};
    }
    
    &[disabled] {
        background-color: ${colors.whiteThree};
    }

    @media ${breakpoint.sm} {
        padding: 12px 16px;
    }
`;

const SelectWrapper = styled.div`
    display: flex;
    font-family: Teko;
    align-items: center;
    flex: 0 0 auto;
    padding-right: 20px;

    @media ${breakpoint.sm} {
        padding-right: 0;        
    }
`;

const FilterContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    font-family: Teko;
    align-items: center;
    padding: 0 0 20px 0;

    @media ${breakpoint.sm} {
        padding: 25px 0;
    }
`;

const Label = styled.label`
    color: ${colors.warmGreyTwo};
    display: inline-block;
    font-weight: 300;
    margin-right: 10px;
    font-size: 2.5vw;
`;

class Work extends Component {
    state = {
        categories: [],
        industries: [],
        filteredCategory: [],
        filteredIndustry: [],
        selectedCategory: "",
        selectedIndustry: "",
        list: false,
        grid: true,
        noWorkFound: false,
        categoryParams: "",
        industryParams: "",
        mql: false
    };

    componentDidMount() {
        const mql = window.matchMedia('(max-width: 768px)');
        this.props.history.push({
            pathname: '/',
            search: ""
        });
        this.props.onFetchWork();
        const industries = [{value: "all industries", label: "all industries"}, ...services.getIndustries()];
        const categories = [{value: "all categories", label: "all categories"}, ...services.getCategories()];
        this.setState({industries: industries, categories: categories, mql: mql.matches});

    };

    clearParams(params) {
        let clearedParams = params.trim();
        clearedParams = params.replace(/\s/g, "-");
        clearedParams = decodeURIComponent(clearedParams);
        return clearedParams;
    };

    onClickHandler = () => {
        this.setState((prevState) => {
            return {list: !prevState.list, grid: !prevState.grid};
        });
    };
    
    onChangeHandler = (option, type) => {
        let selectedCategory = this.state.selectedCategory;
        let selectedIndustry = this.state.selectedIndustry;
        let filteredCategory = this.state.filteredCategory;
        let filteredIndustry = this.state.filteredIndustry;
        const data = this.props.work;
        let noWorkFound = false;
        let industryParams = this.state.industryParams;
        let categoryParams = this.state.categoryParams;
        let params= "";
        let result = [];
        
        if (type === 'industry') {
            selectedIndustry = option.value;
            industryParams = `case_industry=${this.clearParams(selectedIndustry)}`;
            filteredIndustry = data.filter(item => item.industry === selectedIndustry);
            
            if (filteredIndustry.length > 0) {
                if (filteredCategory.length > 0) {
                    result = filteredIndustry.filter(({category}) => category.includes(selectedCategory));
                    this.props.onFilterWork(result);
                } else {
                    result = filteredIndustry;
                    this.props.onFilterWork(result);
                }
            } else if (option.value === "all industries") {
                industryParams = "";
                if (filteredCategory.length > 0) {
                    result = filteredCategory.filter(({category}) => category.includes(selectedCategory));
                    this.props.onFilterWork(result);
                } else {
                    result = data;
                    this.props.onFilterWork(result);
                }
            }
        } else if (type === 'category') {
            selectedCategory = option.value;
            categoryParams = `case_category=${this.clearParams(selectedCategory)}`;
            filteredCategory = data.filter(({category}) => category.includes(selectedCategory));
            
            if (filteredCategory.length > 0) {
                if (filteredIndustry.length > 0) {
                    result = filteredCategory.filter(item => item.industry.includes(selectedIndustry));
                    this.props.onFilterWork(result);
                } else {
                    result = filteredCategory;
                    this.props.onFilterWork(result);
                }
            } else if (option.value === "all categories") {
                categoryParams = "";
                if (filteredIndustry.length > 0) {
                    result = filteredIndustry.filter(item => item.industry.includes(selectedIndustry));
                    this.props.onFilterWork(result);
                } else {
                    result = data;
                    this.props.onFilterWork(result);
                }
            }
        }
        
        noWorkFound = result.length === 0 ? true : false;

        params = `${categoryParams}&${industryParams}`;

        const searchParams = new URLSearchParams(params);

        this.props.history.push({
            pathname: '/',
            search: "?" + searchParams.toString()
        });

        this.setState({
            noWorkFound: noWorkFound,
            selectedCategory: selectedCategory, 
            selectedIndustry: selectedIndustry,
            filteredCategory: filteredCategory,
            filteredIndustry: filteredIndustry,
            categoryParams: categoryParams,
            industryParams: industryParams
        });
    };

    render() {
        let stateWork = <li style={{textAlign: 'center'}}>No Work Found</li>;
        let viewState = this.state.list ? "list" : "grid";

        if (this.props.filteredWork.length > 0) {
            stateWork = <Teasers view={viewState} work={this.props.filteredWork} />
        } else {
            stateWork = <Teasers view={viewState} work={this.props.work} />
        }
        
        if ( this.props.loading ) {
            stateWork = <Spinner />;
        }
        return(
            <ContainerFluid>
                <Banner title="Work" mql={this.state.mql} />
                <FilterContainer>
                    <ViewWrapper>
                        <ViewBtn disabled={this.state.list} onClick={this.onClickHandler}><i className="fa fa-bars"></i></ViewBtn>
                        <ViewBtn disabled={this.state.grid} onClick={this.onClickHandler}><i className="fa fa-th-large"></i></ViewBtn>
                    </ViewWrapper>
                    <SelectWrapper>
                        <Label>Show me</Label>
                        <Select onChange={(event) => this.onChangeHandler(event, "category")}
                                defaultValue={{ label: "all categories", value: "all categories" }}
                                options={this.state.categories} 
                                value={this.state.selectedCategory.value}
                                styles={customStyles}
                            />
                        <Label>in</Label>    
                        <Select onChange={(event) => this.onChangeHandler(event, "industry")}
                                defaultValue={{ label: "all industries", value: "all industries" }}
                                options={this.state.industries} 
                                value={this.state.selectedIndustry.value}
                                styles={customStyles}
                            />
                    </SelectWrapper>
                </FilterContainer>
                {stateWork}
                <Clients />
            </ContainerFluid>
        ) 
    }
}

const mapStateToProps = state => {
    return {
        work: state.work,
        filteredWork: state.filteredWork,
        loading: state.loading
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchWork: () => dispatch(actions.fetchWork()),
        onFilterWork: (data) => dispatch(actions.filterWork(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Work);