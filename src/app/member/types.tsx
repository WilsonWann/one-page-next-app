export enum CHECK_IMAGE_STRING {
  FACEBOOK = 'platform-lookaside.fbsbx.com',
  GOOGLE = 'lh3.googleusercontent.com',
  LINE = 'profile.line-scdn.net',
}

export type LayoutProps = {
  children: React.ReactNode;
};

export type UserBindingProps = {
  type: 'facebook' | 'google' | 'line';
};

export type UserProps = {
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
};
