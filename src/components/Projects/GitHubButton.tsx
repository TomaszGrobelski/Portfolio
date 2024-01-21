import { Icon } from '@iconify/react';
import '../../styles/Projects/gitHubButton.scss'
const GitHubButton = () => {
  return (
    <button className='git-hub-button'>
      <span>Github</span>
      <Icon icon='mingcute:github-fill' color='white' width={25} />
    </button>
  );
};

export default GitHubButton;
