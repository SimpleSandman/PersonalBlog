import { async } from "q";

export default async({ store }) => { await store.dispatch('getPosts'); }