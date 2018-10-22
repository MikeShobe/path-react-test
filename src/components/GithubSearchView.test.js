import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GithubSearchView from './GithubSearchView.js';
import {
  GithubLogo,
  TopTitle,
  MainGrid,
  SearchButton
} from './../styledComponents/githubSearch';

configure({ adapter: new Adapter() });

const initialProps = {
  handleInputChange: jest.fn(),
  handleSearch: jest.fn(),
  renderRepoItems: jest.fn(),
  searchReducer: {
    githubName: 'mikeshobe',
    invalidSearch: false,
    reposArray: [],
  },
};

describe('GithubSearchView', () => {
  it('GithubSearchView component exists', () => {
    const wrapper = mount(<GithubSearchView {...initialProps} />);

    expect(wrapper).toHaveLength(1)
  });
  it('GithubLogo styled component exists', () => {
    const wrapper = mount(<GithubLogo />);

    expect(wrapper).toHaveLength(1)
  });
  it('TopTitle styled component exists', () => {
    const wrapper = mount(<TopTitle />);

    expect(wrapper).toHaveLength(1)
  });
  it('MainGrid styled component exists', () => {
    const wrapper = mount(<MainGrid />);

    expect(wrapper).toHaveLength(1)
  });
  it('SearchButton styled component exists', () => {
    const wrapper = mount(<SearchButton />);

    expect(wrapper).toHaveLength(1)
  });
  // TODO
  // it('handleSearch function called when Search button clicked', () => {
  // });
});
