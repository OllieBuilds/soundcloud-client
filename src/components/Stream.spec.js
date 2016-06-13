import Stream from './Stream';
import { shallow } from 'enzyme';

describe('Stream', () => {

  const props = {
    tracks: [{ title: 'x' }, { title: 'y' }],
  };

  it('show two elements', () => {
    const element = shallow(<Stream {...props} />);

    expect(element.find('.track')).to.have.length(2);
  });

});
