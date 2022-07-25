import CheckBox from '../components/Checkbox.vue'

export default {
	title: 'Check Box',
	component: CheckBox,
	argTypes: {
		size: {
			control: { type: 'select' },
			options: ['sm', 'md', 'lg'],
		},
		type: {
			control: { type: 'select' },
			options: ['primary', 'secondary'],
		}
	}
}

const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { CheckBox },
	template: '<CheckBox v-bind="$props" />',
});

export const Large = Template.bind({});
Large.args = {
	size: 'lg',
	type: 'primary'
};

export const Medium = Template.bind({});
Medium.args = {
	size: 'md',
	type: 'primary'
};

export const Small = Template.bind({});
Small.args = {
	size: 'sm',
	type: 'primary'
};
