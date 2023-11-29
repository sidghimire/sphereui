import React from 'react';
import { TouchableOpacity, Text, type TouchableOpacityProps } from 'react-native';
import { styled } from 'nativewind';

const ButtonStyled = styled(TouchableOpacity);
const TextStyled = styled(Text);
function isText(child) {
    if (React.isValidElement(child)) {
        return false
    } else if (typeof child === 'string' || typeof child === 'number') {
        return true
    }
}

const variants = {
    primary: 'bg-[#000] dark:bg-[#fff] p-3 px-5 rounded-md',
    secondary: 'bg-[#f1f1f3] dark:bg-[#1d1d20] p-3 px-5 rounded-md',
    destructive: 'bg-[#d10e1d] dark:bg-[#6b1117] p-3 px-5 rounded-md',
    outline: 'bg-[#fff] dark:bg-[#000] border border-[#cfcfcf] dark:border-[#2f2f2f] p-3 px-5 rounded-md',
    link: ' p-1 border-b border-[#cfcfcf] dark:border-[#2f2f2f]',
};

const textVariant = {
    primary: 'text-[#fff] dark:text-[#000]',
    secondary: 'text-[#000] dark:text-[#fff]',
    destructive: 'text-[#fff] dark:text-[#fff]',
    outline: 'text-[#000] dark:text-[#fff]',
    link: 'text-[#000] dark:text-[#fff]',
};

interface ButtonWithTextProps extends Omit<TouchableOpacityProps, 'style'> {
    variant?: keyof typeof variants; // Make variant optional
    textClass?: string;
    children?: React.ReactNode;
    className?: string
}

const Button = ({ variant, ...props }: ButtonWithTextProps) => {
    console.log(props.textClass)
    return (
        <ButtonStyled className={`${variants[variant]}`} activeOpacity={0.9} {...props}>
            {isText(props.children)
                &&
                <TextStyled className={`${textVariant[variant]} text-[12px] text-center ${props.textClass}`}>
                    {props.children}
                </TextStyled>
            }
            {!isText(props.children)
                &&
                props.children
            }
        </ButtonStyled>
    );
};

Button.defaultProps = {
    variant: 'primary',
};

export default Button;
