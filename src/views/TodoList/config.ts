import { request } from '@/utils/request';
interface ResponseType {
  code: number;
  msg: string;
  data: { content: any };
}

// provider查询下拉框列表
export function providerFetch(data: { type: string }): Promise<ResponseType> {
  return request({
    url: '/source/options',
    method: 'get',
    data
  });
}
