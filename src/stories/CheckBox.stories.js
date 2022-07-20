import CheckBox from '../components/Checkbox.vue'

export default {
	title: 'Check Box',
	component: CheckBox,
	argTypes: {
		size: {
			control: { type: 'select' },
			options: ['small', 'medium', 'large']
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
	size: 'large',
	label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
	size: 'small',
	label: 'Button',
};
