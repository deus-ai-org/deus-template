import { expect, test } from 'vitest';
import { apiClient, sampleBlob } from './apiClient';

test('GET: /api/public/tasks', async () => {
  const res = await apiClient.public.tasks.get();
  expect(res.status).toEqual(200);
});

test('POST: /api/private/tasks', async () => {
  const res = await apiClient.private.tasks.post({ body: { label: 'task 1', image: sampleBlob } });
  expect(res.status).toEqual(201);
});

test('PATCH: /api/private/tasks', async () => {
  const task = await apiClient.private.tasks.post({ body: { label: 'task 2' } });
  const res = await apiClient.private.tasks.patch({
    body: { taskId: task.body.id, label: task.body.label, done: true },
  });
  expect(res.status).toEqual(200);
});

test('DELETE: /api/private/tasks', async () => {
  const task = await apiClient.private.tasks.post({ body: { label: 'task 3', image: sampleBlob } });
  const res = await apiClient.private.tasks.delete({ body: { taskId: task.body.id } });
  expect(res.status).toEqual(204);
});
