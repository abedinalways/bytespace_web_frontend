import * as React from 'react';
import Link from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';
import { LoaderCircle } from 'lucide-react';
import { cn } from 'cn';

const buttonVariants = cva(
  [
    'group/btn relative inline-flex shrink-0 select-none items-center justify-center gap-2 whitespace-nowrap border border-transparent bg-clip-padding font-medium outline-none transition-colors duration-200',
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
    'disabled:pointer-events-none disabled:opacity-50',
    'aria-disabled:pointer-events-none aria-disabled:opacity-50',
    'focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50',
  ],
  {
    variants: {
    
      color: {
        primary:
          '[--btn-bg:var(--primary)] [--btn-fg:var(--primary-foreground)] [--btn-color:var(--primary)] dark:[--btn-color:color-mix(in_oklab,var(--primary),white_45%)]',
        accent:
          '[--btn-bg:var(--accent)] [--btn-fg:var(--accent-foreground)] [--btn-color:color-mix(in_oklab,var(--accent),black_55%)] dark:[--btn-color:var(--accent)]',
        secondary:
          '[--btn-bg:var(--secondary)] [--btn-fg:var(--secondary-foreground)] [--btn-color:var(--secondary-foreground)]',
        neutral:
          '[--btn-bg:var(--foreground)] [--btn-fg:var(--background)] [--btn-color:var(--foreground)]',
        success:
          '[--btn-bg:var(--color-green-600)] [--btn-fg:white] [--btn-color:var(--color-green-600)] dark:[--btn-color:var(--color-green-400)]',
        warning:
          '[--btn-bg:var(--color-amber-500)] [--btn-fg:var(--color-amber-950)] [--btn-color:var(--color-amber-500)] dark:[--btn-color:var(--color-amber-300)]',
        danger:
          '[--btn-bg:var(--color-red-600)] [--btn-fg:white] [--btn-color:var(--color-red-600)] dark:[--btn-color:var(--color-red-400)]',
        info: '[--btn-bg:var(--color-blue-600)] [--btn-fg:white] [--btn-color:var(--color-blue-600)] dark:[--btn-color:var(--color-blue-400)]',
      },
      size: {
        xs: 'h-7 gap-1.5 px-2.5 text-xs',
        sm: 'h-8 gap-1.5 px-3 text-sm',
        md: 'h-10 gap-2 px-4 text-sm',
        lg: 'h-11 gap-2 px-6 text-base',
        xl: 'h-12 gap-2.5 px-8 text-base',
        'icon-xs': 'size-7',
        'icon-sm': 'size-8',
        icon: 'size-10',
        'icon-lg': 'size-11',
        'icon-xl': 'size-12',
      },
    
      variant: {
        solid: 'border-(--btn-bg) bg-(--btn-bg) text-(--btn-fg) hover:opacity-90',
        soft: 'border-(--btn-color)/20 bg-(--btn-color)/10 text-(--btn-color) hover:bg-(--btn-color)/20',
        outline:
          'border-(--btn-color)/40 text-(--btn-color) hover:border-(--btn-color) hover:bg-(--btn-color)/10',
        ghost: 'text-(--btn-color) hover:bg-(--btn-color)/10',
        link: 'h-auto w-auto rounded-none bg-transparent px-0 py-0 text-(--btn-color) underline-offset-4 hover:underline',
      },
      fullWidth: {
        true: 'w-full',
        false: '',
      },
      rounded: {
        default: 'rounded-lg',
        full: 'rounded-full',
        none: 'rounded-none',
      },
    },
    defaultVariants: {
      color: 'primary',
      size: 'md',
      variant: 'solid',
      fullWidth: false,
      rounded: 'default',
    },
  },
);

type ButtonVariant = NonNullable<VariantProps<typeof buttonVariants>['variant']>;
type ButtonColor = NonNullable<VariantProps<typeof buttonVariants>['color']>;
type ButtonSize = NonNullable<VariantProps<typeof buttonVariants>['size']>;
type ButtonRounded = NonNullable<VariantProps<typeof buttonVariants>['rounded']>;

/** Props shared by both the `<button>` and the `<Link>` flavours. */
interface ButtonBaseProps {
  children?: React.ReactNode;
  className?: string;
  /** Visual style of the button. @default 'solid' */
  variant?: ButtonVariant;
  /** Accent colour of the button. @default 'primary' */
  color?: ButtonColor;
  /** Height / padding / font-size preset. @default 'md' */
  size?: ButtonSize;
  /** Corner style. @default 'default' */
  rounded?: ButtonRounded;
  /** Stretches the button to fill its container. @default false */
  fullWidth?: boolean;
  /** Shows a spinner, blocks interaction and disables the button / link. @default false */
  loading?: boolean;
  /** Replaces `children` while `loading` is true. */
  loadingText?: string;
  /** Icon rendered before the label. */
  startIcon?: React.ReactNode;
  /** Icon rendered after the label (hidden while `loading`). */
  endIcon?: React.ReactNode;
}

type LinkExtras = Pick<
  React.ComponentProps<typeof Link>,
  'href' | 'prefetch' | 'replace' | 'scroll'
>;

export interface ButtonAsButtonProps
  extends ButtonBaseProps,
    Omit<React.ComponentProps<'button'>, 'color' | 'children' | 'className'> {
  href?: undefined;
}

export interface ButtonAsLinkProps
  extends ButtonBaseProps,
    Omit<React.ComponentPropsWithoutRef<'a'>, 'color' | 'children' | 'className' | 'href'>,
    LinkExtras {
  href: LinkExtras['href'];
  /** Marks the link as disabled (`aria-disabled` + blocks interaction/navigation). */
  disabled?: boolean;
  ref?: React.Ref<HTMLAnchorElement>;
}


export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

type ButtonRenderProps = ButtonBaseProps &
  Omit<React.ComponentProps<'button'>, 'color' | 'children' | 'className' | 'ref'> &
  Omit<
    React.ComponentPropsWithoutRef<'a'>,
    'color' | 'children' | 'className' | 'href' | 'type' | 'ref'
  > & {
    href?: LinkExtras['href'];
    prefetch?: boolean;
    replace?: boolean;
    scroll?: boolean;
    ref?: React.Ref<HTMLElement>;
  };

export function Button(props: ButtonProps) {
  const {
    className,
    variant = 'solid',
    color = 'primary',
    size = 'md',
    rounded = 'default',
    fullWidth = false,
    loading = false,
    loadingText,
    startIcon,
    endIcon,
    children,
    href,
    prefetch,
    replace,
    scroll,
    target,
    rel,
    type,
    disabled,
    ref,
    ...rest
  } = props as ButtonRenderProps;

  const isDisabled = Boolean(disabled) || loading;

  const classes = cn(
    buttonVariants({ variant, color, size, rounded, fullWidth }),
    isDisabled && 'pointer-events-none opacity-50',
    className,
  );

  const content = (
    <>
      {loading ? (
        <LoaderCircle aria-hidden="true" className="size-4 animate-spin" />
      ) : (
        startIcon
      )}
      {loading && loadingText ? loadingText : children}
      {loading ? null : endIcon}
    </>
  );

  if (href !== undefined) {
    const isExternal =
      typeof href === 'string' && /^([a-z][a-z0-9+.-]*:|\/\/)/i.test(href);
    const isNewTab = target === '_blank';

    const commonProps = {
      'data-slot': 'reusable-button',
      'data-variant': variant,
      'data-color': color,
      'data-size': size,
      'data-loading': loading || undefined,
      'aria-disabled': isDisabled || undefined,
      'aria-busy': loading || undefined,
      className: classes,
      target,
      rel: rel ?? (isNewTab ? 'noopener noreferrer' : undefined),
    } as const;

    if (isExternal) {
      return (
        <a
          href={typeof href === 'string' ? href : String(href)}
          {...rest}
          {...commonProps}
          ref={ref as React.Ref<HTMLAnchorElement>}
        >
          {content}
        </a>
      );
    }

    return (
      <Link
        href={href}
        prefetch={prefetch}
        replace={replace}
        scroll={scroll}
        {...rest}
        {...commonProps}
        ref={ref as React.Ref<HTMLAnchorElement>}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type ?? 'button'}
      disabled={isDisabled}
      {...rest}
      data-slot="reusable-button"
      data-variant={variant}
      data-color={color}
      data-size={size}
      data-loading={loading || undefined}
      aria-busy={loading || undefined}
      className={classes}
      ref={ref as React.Ref<HTMLButtonElement>}
    >
      {content}
    </button>
  );
}

export { buttonVariants };
export type { ButtonVariant, ButtonColor, ButtonSize, ButtonRounded };
