import { comments } from '../data';

export async function GET(_request: Request, { params }: { params: { id: string } }) {
    const { id } = await params;
    const comment = comments.find(c => c.id === Number(id));

    return Response.json(comment);
}

