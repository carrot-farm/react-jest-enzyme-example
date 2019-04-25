import React from 'react';

import renderer from 'react-test-renderer';
import NameList from './NameList';

describe('NameList', () => {
    let component = null;

    it('render correctly', () => {
        component = renderer.create(<NameList names={["velopert", "김수현"]} />);
    });

    it('matches snapshot', () => {
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});