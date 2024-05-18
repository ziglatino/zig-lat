declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"blog": {
"first-post.md": {
	id: "first-post.md";
  slug: "first-post";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"genericos.mdx": {
	id: "genericos.mdx";
  slug: "genericos";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"guia-de-estilos.mdx": {
	id: "guia-de-estilos.mdx";
  slug: "guia-de-estilos";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"markdown-style-guide.md": {
	id: "markdown-style-guide.md";
  slug: "markdown-style-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"second-post.md": {
	id: "second-post.md";
  slug: "second-post";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"stack-de-memoria.mdx": {
	id: "stack-de-memoria.mdx";
  slug: "stack-de-memoria";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"third-post.md": {
	id: "third-post.md";
  slug: "third-post";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"using-mdx.mdx": {
	id: "using-mdx.mdx";
  slug: "using-mdx";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
};
"guia": {
"anonymous-structs.mdx": {
	id: "anonymous-structs.mdx";
  slug: "anonymous-structs";
  body: string;
  collection: "guia";
  data: any
} & { render(): Render[".mdx"] };
"arrays.mdx": {
	id: "arrays.mdx";
  slug: "arrays";
  body: string;
  collection: "guia";
  data: any
} & { render(): Render[".mdx"] };
"assignment.mdx": {
	id: "assignment.mdx";
  slug: "assignment";
  body: string;
  collection: "guia";
  data: any
} & { render(): Render[".mdx"] };
"comptime.mdx": {
	id: "comptime.mdx";
  slug: "comptime";
  body: string;
  collection: "guia";
  data: any
} & { render(): Render[".mdx"] };
"defer.mdx": {
	id: "defer.mdx";
  slug: "defer";
  body: string;
  collection: "guia";
  data: any
} & { render(): Render[".mdx"] };
"enums.mdx": {
	id: "enums.mdx";
  slug: "enums";
  body: string;
  collection: "guia";
  data: any
} & { render(): Render[".mdx"] };
"errors.mdx": {
	id: "errors.mdx";
  slug: "errors";
  body: string;
  collection: "guia";
  data: any
} & { render(): Render[".mdx"] };
"floats.mdx": {
	id: "floats.mdx";
  slug: "floats";
  body: string;
  collection: "guia";
  data: any
} & { render(): Render[".mdx"] };
"for-loops.mdx": {
	id: "for-loops.mdx";
  slug: "for-loops";
  body: string;
  collection: "guia";
  data: any
} & { render(): Render[".mdx"] };
"functions.mdx": {
	id: "functions.mdx";
  slug: "functions";
  body: string;
  collection: "guia";
  data: any
} & { render(): Render[".mdx"] };
"hola-mundo.mdx": {
	id: "hola-mundo.mdx";
  slug: "hola-mundo";
  body: string;
  collection: "guia";
  data: any
} & { render(): Render[".mdx"] };
"if-expressions.mdx": {
	id: "if-expressions.mdx";
  slug: "if-expressions";
  body: string;
  collection: "guia";
  data: any
} & { render(): Render[".mdx"] };
"imports.mdx": {
	id: "imports.mdx";
  slug: "imports";
  body: string;
  collection: "guia";
  data: any
} & { render(): Render[".mdx"] };
"inline-loops.mdx": {
	id: "inline-loops.mdx";
  slug: "inline-loops";
  body: string;
  collection: "guia";
  data: any
} & { render(): Render[".mdx"] };
"instalacion.mdx": {
	id: "instalacion.mdx";
  slug: "instalacion";
  body: string;
  collection: "guia";
  data: any
} & { render(): Render[".mdx"] };
"integer-rules.mdx": {
	id: "integer-rules.mdx";
  slug: "integer-rules";
  body: string;
  collection: "guia";
  data: any
} & { render(): Render[".mdx"] };
"labelled-blocks.mdx": {
	id: "labelled-blocks.mdx";
  slug: "labelled-blocks";
  body: string;
  collection: "guia";
  data: any
} & { render(): Render[".mdx"] };
"labelled-loops.mdx": {
	id: "labelled-loops.mdx";
  slug: "labelled-loops";
  body: string;
  collection: "guia";
  data: any
} & { render(): Render[".mdx"] };
"loops-as-expressions.mdx": {
	id: "loops-as-expressions.mdx";
  slug: "loops-as-expressions";
  body: string;
  collection: "guia";
  data: any
} & { render(): Render[".mdx"] };
"many-item-pointers.mdx": {
	id: "many-item-pointers.mdx";
  slug: "many-item-pointers";
  body: string;
  collection: "guia";
  data: any
} & { render(): Render[".mdx"] };
"opaque.mdx": {
	id: "opaque.mdx";
  slug: "opaque";
  body: string;
  collection: "guia";
  data: any
} & { render(): Render[".mdx"] };
"optionals.mdx": {
	id: "optionals.mdx";
  slug: "optionals";
  body: string;
  collection: "guia";
  data: any
} & { render(): Render[".mdx"] };
"payload-captures.mdx": {
	id: "payload-captures.mdx";
  slug: "payload-captures";
  body: string;
  collection: "guia";
  data: any
} & { render(): Render[".mdx"] };
"pointer-sized-integers.mdx": {
	id: "pointer-sized-integers.mdx";
  slug: "pointer-sized-integers";
  body: string;
  collection: "guia";
  data: any
} & { render(): Render[".mdx"] };
"pointers.mdx": {
	id: "pointers.mdx";
  slug: "pointers";
  body: string;
  collection: "guia";
  data: any
} & { render(): Render[".mdx"] };
"runtime-safety.mdx": {
	id: "runtime-safety.mdx";
  slug: "runtime-safety";
  body: string;
  collection: "guia";
  data: any
} & { render(): Render[".mdx"] };
"sentinel-termination.mdx": {
	id: "sentinel-termination.mdx";
  slug: "sentinel-termination";
  body: string;
  collection: "guia";
  data: any
} & { render(): Render[".mdx"] };
"slices.mdx": {
	id: "slices.mdx";
  slug: "slices";
  body: string;
  collection: "guia";
  data: any
} & { render(): Render[".mdx"] };
"structs.mdx": {
	id: "structs.mdx";
  slug: "structs";
  body: string;
  collection: "guia";
  data: any
} & { render(): Render[".mdx"] };
"switch.mdx": {
	id: "switch.mdx";
  slug: "switch";
  body: string;
  collection: "guia";
  data: any
} & { render(): Render[".mdx"] };
"unions.mdx": {
	id: "unions.mdx";
  slug: "unions";
  body: string;
  collection: "guia";
  data: any
} & { render(): Render[".mdx"] };
"vectors.mdx": {
	id: "vectors.mdx";
  slug: "vectors";
  body: string;
  collection: "guia";
  data: any
} & { render(): Render[".mdx"] };
"while-loops.mdx": {
	id: "while-loops.mdx";
  slug: "while-loops";
  body: string;
  collection: "guia";
  data: any
} & { render(): Render[".mdx"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("./../src/content/config.js");
}
